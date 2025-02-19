# Base node image
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app

# Copy dependencies and source
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Handle environment variables
RUN if [ -f .env.example ] && [ ! -f .env ]; then \
    cp .env.example .env; \
    fi

# Build application
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Create necessary directories and set permissions
RUN mkdir -p /app/public/ \
    && mkdir -p /app/.next/cache \
    && chown -R nextjs:nodejs /app

# Copy built files and environment
COPY --from=builder /app/.next/standalone/ ./
COPY --from=builder /app/.next/static/ ./.next/static/
COPY --from=builder /app/.env ./.env

# Handle public directory copy with proper error handling
RUN --mount=from=builder,source=/app/public,target=/tmp/public \
    cp -r /tmp/public/. /app/public/ 2>/dev/null || true

# Install sharp explicitly in the standalone environment
RUN npm install sharp

# Set proper permissions
RUN chown -R nextjs:nodejs /app

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
# Add NEXTAUTH_URL environment variable
ENV NEXTAUTH_URL="http://localhost:3000"

CMD ["node", "server.js"]