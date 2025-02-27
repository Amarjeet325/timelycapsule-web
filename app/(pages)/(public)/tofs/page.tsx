import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/Card";

const termsOfService = [
  {
    title: "Acceptance of Terms",
    description:
      "By accessing and using Timely Capsule, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.",
  },
  {
    title: "Use License",
    description:
      "Permission is granted to temporarily download one copy of the materials (information or software) on Timely Capsule for personal, non-commercial transitory viewing only.",
  },
  {
    title: "User Responsibilities ",
    description:
      "Users are responsible for maintaining the confidentiality of their account and password information. Users agree to accept responsibility for all activities that occur under their account.",
  },
];

const privacyPolicy = [
  {
    title: "Information Collection ",
    description:
      "We collect information that you provide directly to us, including but not limited to name, email address, and any content you choose to store in your time capsules.",
  },
  {
    title: "Data Protection ",
    description:
      "We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk of processing your personal data.",
  },
  {
    title: "Your Rights ",
    description:
      "You have the right to access, correct, or delete your personal data. You can exercise these rights by contacting our support team.",
  },
];

export default function TermsOfServicepage(): JSX.Element {
  return (
    <section>
      <div className="max-w-lg p-5 md:p-0 my-8 md:max-w-2xl lg:max-w-3xl flex flex-col justify-center items-center mx-auto space-y-5">
        <div className="text-center">
          <h1 className="font-bold text-3xl tracking-tight">
            Terms of Service & Privacy Policy
          </h1>
          <p className="text-[#58626F]">Last updated: February 25, 2024</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl ">Terms of Service</CardTitle>
          </CardHeader>
          <hr />
          <CardContent>
            <div className="space-y-4 mt-4">
              {termsOfService.map((term, index) => (
                <article key={term.title} className="space-y-1">
                  <h2 className="font-semibold text-lg tracking-tight">
                    {index + 1}. {term.title}
                  </h2>
                  <p className="text-[#58626F] font-semibold">
                    {term.description}
                  </p>
                </article>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="capitalize text-xl">privacy policy</CardTitle>
          </CardHeader>
          <hr />
          <CardContent>
            <div className="space-y-4 mt-4">
              {privacyPolicy.map((term, index) => (
                <article key={term.title} className="space-y-1">
                  <h2 className="font-semibold text-lg tracking-tight">
                    {index + 1}. {term.title}
                  </h2>
                  <p className="text-[#58626F] font-semibold">
                    {term.description}
                  </p>
                </article>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
