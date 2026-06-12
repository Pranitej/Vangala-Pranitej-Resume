const Experience = () => (
  <div>
    <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-4">
      <p>
        <span className="font-bold">Freelance Full Stack Developer</span> | VM
        Software Solutions
      </p>
      <p className="font-bold whitespace-nowrap">Jan 2024 – Present</p>
    </div>

    <ul className="list-disc list-outside pl-5 mt-1 space-y-0.5 leading-snug">
      <li>
        Delivered 3 production web applications end to end on the MERN stack,
        owning requirement scoping, development, deployment, and support.
      </li>
      <li>
        Provisioned production infrastructure on a Hostinger KVM VPS using
        Dokploy, Docker, and Traefik with automated SSL. Operated self-hosted
        MongoDB backing 3 client applications.
      </li>
      <li>
        Integrated 3 third-party services across client projects: Razorpay
        payments, Resend transactional email, and Cloudflare R2 storage.
      </li>
    </ul>
  </div>
);

export default Experience;
