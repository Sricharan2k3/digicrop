import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-6 lg:px-10 h-16 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <MountainIcon className="h-8 w-8" />
          <span className="sr-only">AI Solutions</span>
        </Link>
        <nav className="ml-auto flex gap-6 sm:gap-8">
          {["Features", "Benefits", "Pricing", "Contact"].map((text) => (
            <Link
              key={text}
              href="#"
              className="text-lg font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              {text}
            </Link>
          ))}
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-16 md:py-28 lg:py-16">
          <div className="container mx-auto px-6 md:px-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_450px] lg:gap-16 xl:grid-cols-[1fr_650px]">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none">
                    Digicrop.ai
                  </h1>
                  <p className="max-w-[650px] text-muted-foreground md:text-2xl">
                    Pioneering the future of agriculture by harnessing the power
                    of artificial intelligence (AI) to provide cutting-edge
                    solutions for crop rate prediction and yield forecasting.
                  </p>
                </div>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-10 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-10 text-lg font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="650"
                height="650"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full py-16 sm:py-28 md:py-36 lg:py-16 bg-muted"
        >
          <div className="container mx-auto px-6 md:px-10 flex flex-col items-center space-y-10">
            <div className="space-y-6 text-center">
              <h2 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
                Powerful Features for Your Success
              </h2>
              <p className="max-w-[1050px] text-muted-foreground md:text-2xl">
                Empower farmers, agribusinesses, and policymakers with
                actionable insights that optimize resource allocation, mitigate
                risks, and maximize productivity.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col items-center text-center space-y-6"
                >
                  {feature.icon}
                  <h3 className="text-2xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="benefits"
          className="w-full py-16 sm:py-28 md:py-36 lg:py-16"
        >
          <div className="container mx-auto px-6 md:px-10 flex flex-col items-center space-y-10">
            <div className="space-y-6 text-center">
              <h2 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
                Unlock the Benefits of AI
              </h2>
              <p className="max-w-[750px] text-muted-foreground text-xl md:text-2xl">
                Our AI solution delivers tangible benefits that can transform
                your business.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="flex flex-col items-center text-center space-y-6"
                >
                  {benefit.icon}
                  <h3 className="text-2xl font-bold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="w-full py-16 sm:py-28 md:py-36 lg:py-16 bg-muted"
        >
          <div className="container mx-auto px-6 md:px-10 flex flex-col items-center space-y-10">
            <div className="space-y-6 text-center">
              <h2 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
                Affordable Pricing for Every Business
              </h2>
              <p className="max-w-[1050px] text-muted-foreground text-xl md:text-2xl">
                Choose the plan that best fits your needs and budget, and start
                unlocking the power of AI today.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.title}
                  className="bg-background rounded-lg shadow-lg p-8 space-y-6"
                >
                  <h3 className="text-2xl font-bold text-foreground">
                    {plan.title}
                  </h3>
                  <p className="text-5xl font-bold text-primary">
                    ${plan.price}
                  </p>
                  <p className="text-muted-foreground text-lg">per month</p>
                  <ul className="space-y-4 text-muted-foreground text-lg">
                    {plan.features.map((feature, index) => (
                      <li key={index}>
                        <CheckIcon className="mr-2 inline-block h-5 w-5 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#"
                    className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-10 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="w-full  sm:py-28 md:py-36 lg:py-16 bg-muted"
        >
          <div className="container mx-auto px-6 md:px-10 flex flex-col items-center space-y-10">
            <div className="space-y-6 text-center">
              <h2 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
                Get in Touch
              </h2>
              <p className="max-w-[750px] text-muted-foreground text-xl md:text-2xl">
                Have questions or ready to get started? Contact us today to
                learn more about our AI solutions.
              </p>
            </div>
            <div className="mx-auto w-full max-w-md space-y-4">
              <form className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 px-4 rounded-md border border-input bg-background text-lg shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-10 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Contact Us
                </button>
              </form>
              <p className="text-xs text-muted-foreground text-center">
                We&apos;ll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-6 md:px-10 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 AI Solutions. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function CpuIcon(props) {
  return (
    <svg
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="80.13px"
      height="80.13px"
      viewBox="0 0 80.13 80.13"
      style={{
        enableBackground: "new 0 0 80.13 80.13",
      }}
      xmlSpace="preserve"
      {...props}
    >
      <g>
        <path d="M48.355,17.922c3.705,2.323,6.303,6.254,6.776,10.817c1.511,0.706,3.188,1.112,4.966,1.112 c6.491,0,11.752-5.261,11.752-11.751c0-6.491-5.261-11.752-11.752-11.752C53.668,6.35,48.453,11.517,48.355,17.922z M40.656,41.984 c6.491,0,11.752-5.262,11.752-11.752s-5.262-11.751-11.752-11.751c-6.49,0-11.754,5.262-11.754,11.752S34.166,41.984,40.656,41.984 z M45.641,42.785h-9.972c-8.297,0-15.047,6.751-15.047,15.048v12.195l0.031,0.191l0.84,0.263 c7.918,2.474,14.797,3.299,20.459,3.299c11.059,0,17.469-3.153,17.864-3.354l0.785-0.397h0.084V57.833 C60.688,49.536,53.938,42.785,45.641,42.785z M65.084,30.653h-9.895c-0.107,3.959-1.797,7.524-4.47,10.088 c7.375,2.193,12.771,9.032,12.771,17.11v3.758c9.77-0.358,15.4-3.127,15.771-3.313l0.785-0.398h0.084V45.699 C80.13,37.403,73.38,30.653,65.084,30.653z M20.035,29.853c2.299,0,4.438-0.671,6.25-1.814c0.576-3.757,2.59-7.04,5.467-9.276 c0.012-0.22,0.033-0.438,0.033-0.66c0-6.491-5.262-11.752-11.75-11.752c-6.492,0-11.752,5.261-11.752,11.752 C8.283,24.591,13.543,29.853,20.035,29.853z M30.589,40.741c-2.66-2.551-4.344-6.097-4.467-10.032 c-0.367-0.027-0.73-0.056-1.104-0.056h-9.971C6.75,30.653,0,37.403,0,45.699v12.197l0.031,0.188l0.84,0.265 c6.352,1.983,12.021,2.897,16.945,3.185v-3.683C17.818,49.773,23.212,42.936,30.589,40.741z" />
      </g>
    </svg>
  );
}

function CpuIcon1(props) {
  return (
    <svg
      id="Icons"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      {...props}
    >
      <style type="text/css">
        {
          "\n\t.st0{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n"
        }
      </style>
      <path
        className="st0"
        d="M3,25l2.6-4.2c1.5-2.3,4-3.8,6.8-3.8H19v0c0,2.2-1.8,4-4,4h-2"
      />
      <path
        className="st0"
        d="M16,21h7l1.2-1.6c1.1-1.5,2.9-2.4,4.8-2.4h0l-2.7,4.8c-1.4,2.6-4.2,4.2-7.1,4.2h0c-4.7,0-9.3,1.4-13.2,4l0,0"
      />
      <path
        className="st0"
        d="M18,10L18,10L18,10c0-3.9,3.1-7,7-7h0v0C25,6.9,21.9,10,18,10z"
      />
      <path
        className="st0"
        d="M18,13L18,13c-3.9,0-7-3.1-7-7v0h0C14.9,6,18,9.1,18,13L18,13z"
      />
      <line className="st0" x1={18} y1={2} x2={18} y2={17} />
    </svg>
  );
}

function CloudIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19a4.5 4.5 0 0 0 0-9H17a7 7 0 1 0-13 4.9" />
      <path d="M12 16v6m-3-3h6" />
    </svg>
  );
}

function RocketIcon(props) {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"support"}</title>
      <rect width={24} height={24} fill="none" />
      <path d="M12,2a8,8,0,0,0-8,8v1.9A2.92,2.92,0,0,0,3,14a2.88,2.88,0,0,0,1.94,2.61C6.24,19.72,8.85,22,12,22h3V20H12c-2.26,0-4.31-1.7-5.34-4.39l-.21-.55L5.86,15A1,1,0,0,1,5,14a1,1,0,0,1,.5-.86l.5-.29V11a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1v5H13.91a1.5,1.5,0,1,0-1.52,2H20a2,2,0,0,0,2-2V14a2,2,0,0,0-2-2V10A8,8,0,0,0,12,2Z" />
    </svg>
  );
}

function RocketIcon1(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 11.9 2 22l10.1-2.5a10.4 10.4 0 0 0 4.1-2.4h0a10.4 10.4 0 0 0 2.4-4.1L22 2l-9.1 2.5a10.4 10.4 0 0 0-4.1 2.4h0a10.4 10.4 0 0 0-2.4 4.1z" />
      <path d="M9 9l3.5 3.5" />
      <path d="M2 2l5 5" />
      <path d="m2 7 3-3" />
      <path d="m7 2-3 3" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2 3 20h18L12 2z" />
      <path d="m9 15 3-3 3 3" />
    </svg>
  );
}

// Sample data for features, benefits, and pricing
const features = [
  {
    icon: <CpuIcon1 className="w-12 h-12" />,
    title: "Empowering Agriculture",
    description:
      "State-of-the-art AI models trained on vast datasets to provide accurate and reliable results.",
  },
  {
    icon: <CloudIcon className="w-12 h-12" />,
    title: "Crop Rate Prediction",
    description:
      "Generate precise forecasts of crop rates, enabling stakeholders to anticipate market fluctuations and optimize their trading strategie.",
  },
  {
    icon: <RocketIcon1 className="w-12 h-12" />,
    title: "Fast and Efficient",
    description:
      "Optimized algorithms for rapid processing and minimal latency.",
  },
  {
    icon: <CpuIcon className="w-12 h-12" />,
    title: "User-Friendly Interface",
    description:
      "Intuitive and easy-to-use interface designed for all levels of users.",
  },
  {
    icon: <CloudIcon className="w-12 h-12" />,
    title: "Yield Prediction",
    description:
      "Yield prediction solutions empower in making data-driven decisions that drive agricultural productivity and profitability.",
  },
  {
    icon: <RocketIcon className="w-12 h-12" />,
    title: "Dedicated Support",
    description:
      "Our dedicated support team is available around the clock to assist you.",
  },
];

const benefits = [
  {
    icon: <CpuIcon className="w-12 h-12" />,
    title: "Increased Productivity",
    description:
      "Automate routine tasks and focus on higher-value activities to boost productivity.",
  },
  {
    icon: <CloudIcon className="w-12 h-12" />,
    title: "Cost Savings",
    description:
      "Reduce operational costs with efficient AI-powered solutions.",
  },
  {
    icon: <RocketIcon className="w-12 h-12" />,
    title: "Resource Management",
    description: "Enhanced resource management with crop yield predictions",
  },
  {
    icon: <CpuIcon className="w-12 h-12" />,
    title: "Profitability",
    description: "Increased profitability through informed decision-making",
  },
  {
    icon: <CloudIcon className="w-12 h-12" />,
    title: "Yield Quality",
    description: "Reduced crop loss with timely pest detection",
  },
  {
    icon: <RocketIcon className="w-12 h-12" />,
    title: "Flexibility",
    description:
      "Adapt to changing needs with flexible and customizable AI solutions.",
  },
];

const pricingPlans = [
  {
    title: "Basic",
    price: "19",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    title: "Standard",
    price: "49",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    title: "Premium",
    price: "99",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
];
