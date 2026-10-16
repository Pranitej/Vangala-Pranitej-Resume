import BulletList from "./BulletList";

const Experience = () => (
  <div>
    {/* Nudged down so the 10.5pt title sits on the PDF's baseline */}
    <div className="relative top-[0.61px] flex flex-col sm:flex-row sm:justify-between sm:items-baseline sm:gap-4">
      <p>
        <span className="text-[10.5pt] font-bold">
          Freelance Software Developer
        </span>{" "}
        | VM Software Solutions
      </p>
      <p className="font-bold whitespace-nowrap">Oct 2025 – Present</p>
    </div>

    <BulletList
      className="mt-[0.68px]"
      items={[
        "Delivered 3 production web applications end to end on the MERN stack, owning requirement scoping, development, deployment, and support.",
        "Provisioned production infrastructure on a Hostinger KVM VPS using Dokploy, Docker, and Traefik with automated SSL. Operated self-hosted MongoDB backing 3 client applications.",
        "Integrated 3 third-party services across client projects: Razorpay payments, Resend transactional email, and Cloudflare R2 storage.",
      ]}
    />
  </div>
);

export default Experience;
