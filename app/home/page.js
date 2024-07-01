import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-6 lg:px-10 h-16 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-8 w-8" />
          <span className="sr-only">AI Solutions</span>
        </Link>
        <nav className="ml-auto flex gap-6 sm:gap-8">
          {['Features', 'Benefits', 'Pricing', 'Contact'].map((text) => (
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
                    Unlock the Power of AI
                  </h1>
                  <p className="max-w-[650px] text-muted-foreground md:text-2xl">
                    Our AI solutions help you streamline your workflows, boost productivity, and stay ahead of the competition.
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

        <section id="features" className="w-full py-16 sm:py-28 md:py-36 lg:py-16 bg-muted">
          <div className="container mx-auto px-6 md:px-10 flex flex-col items-center space-y-10">
            <div className="space-y-6 text-center">
              <h2 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
                Powerful Features for Your Success
              </h2>
              <p className="max-w-[1050px] text-muted-foreground md:text-2xl">
                Our AI solution offers a comprehensive suite of features to streamline your workflow and boost your productivity.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col items-center text-center space-y-6">
                  {feature.icon}
                  <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-lg">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="benefits" className="w-full py-16 sm:py-28 md:py-36 lg:py-16">
          <div className="container mx-auto px-6 md:px-10 flex flex-col items-center space-y-10">
            <div className="space-y-6 text-center">
              <h2 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">Unlock the Benefits of AI</h2>
              <p className="max-w-[750px] text-muted-foreground text-xl md:text-2xl">
                Our AI solution delivers tangible benefits that can transform your business.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex flex-col items-center text-center space-y-6">
                  {benefit.icon}
                  <h3 className="text-2xl font-bold text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground text-lg">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-16 sm:py-28 md:py-36 lg:py-16 bg-muted">
          <div className="container mx-auto px-6 md:px-10 flex flex-col items-center space-y-10">
            <div className="space-y-6 text-center">
              <h2 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
                Affordable Pricing for Every Business
              </h2>
              <p className="max-w-[1050px] text-muted-foreground text-xl md:text-2xl">
                Choose the plan that best fits your needs and budget, and start unlocking the power of AI today.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
              {pricingPlans.map((plan) => (
                <div key={plan.title} className="bg-background rounded-lg shadow-lg p-8 space-y-6">
                  <h3 className="text-2xl font-bold text-foreground">{plan.title}</h3>
                  <p className="text-5xl font-bold text-primary">${plan.price}</p>
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

        <section id="contact" className="w-full  sm:py-28 md:py-36 lg:py-16 bg-muted">
          <div className="container mx-auto px-6 md:px-10 flex flex-col items-center space-y-10">
            <div className="space-y-6 text-center">
              <h2 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">Get in Touch</h2>
              <p className="max-w-[750px] text-muted-foreground text-xl md:text-2xl">
                Have questions or ready to get started? Contact us today to learn more about our AI solutions.
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
              <p className="text-xs text-muted-foreground text-center">We&apos;ll get back to you as soon as possible.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-6 md:px-10 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 AI Solutions. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
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
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
      <path d="M9 9h6v6H9z" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
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
  { icon: <CpuIcon className="w-12 h-12" />, title: "Advanced AI", description: "State-of-the-art AI models trained on vast datasets to provide accurate and reliable results." },
  { icon: <CloudIcon className="w-12 h-12" />, title: "Cloud Integration", description: "Seamless integration with leading cloud platforms to ensure scalability and performance." },
  { icon: <RocketIcon className="w-12 h-12" />, title: "Fast and Efficient", description: "Optimized algorithms for rapid processing and minimal latency." },
  { icon: <CpuIcon className="w-12 h-12" />, title: "User-Friendly Interface", description: "Intuitive and easy-to-use interface designed for all levels of users." },
  { icon: <CloudIcon className="w-12 h-12" />, title: "Robust Security", description: "Top-notch security measures to protect your data and ensure compliance." },
  { icon: <RocketIcon className="w-12 h-12" />, title: "24/7 Support", description: "Our dedicated support team is available around the clock to assist you." },
];

const benefits = [
  { icon: <CpuIcon className="w-12 h-12" />, title: "Increased Productivity", description: "Automate routine tasks and focus on higher-value activities to boost productivity." },
  { icon: <CloudIcon className="w-12 h-12" />, title: "Cost Savings", description: "Reduce operational costs with efficient AI-powered solutions." },
  { icon: <RocketIcon className="w-12 h-12" />, title: "Competitive Edge", description: "Gain a competitive advantage with innovative AI technologies." },
  { icon: <CpuIcon className="w-12 h-12" />, title: "Scalability", description: "Easily scale your operations to meet growing business demands." },
  { icon: <CloudIcon className="w-12 h-12" />, title: "Improved Accuracy", description: "Leverage precise data analysis to make informed decisions." },
  { icon: <RocketIcon className="w-12 h-12" />, title: "Flexibility", description: "Adapt to changing needs with flexible and customizable AI solutions." },
];

const pricingPlans = [
  { title: "Basic", price: "19", features: ["Feature 1", "Feature 2", "Feature 3"] },
  { title: "Standard", price: "49", features: ["Feature 1", "Feature 2", "Feature 3"] },
  { title: "Premium", price: "99", features: ["Feature 1", "Feature 2", "Feature 3"] },
  
];
