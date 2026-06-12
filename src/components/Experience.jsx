const Experience = () => (
  <div>
    <div className="flex flex-col sm:flex-row sm:justify-between">
      <p className="font-semibold">
        Freelance Full Stack Developer | VM Software Solutions
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-300 sm:text-right sm:mt-0 mt-1">
        Jan 2024 – Present
      </p>
    </div>

    <ul className="list-disc list-outside pl-5 mt-2 text-sm text-gray-800 dark:text-gray-300 space-y-1">
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
