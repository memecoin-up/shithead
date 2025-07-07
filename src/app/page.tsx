import { MadeWithDyad } from "@/components/made-with-dyad";
import websiteContent from "../../data/website-content.json";
import Image from "next/image"; // Import Image component

export default function Home() {
  const { sections } = websiteContent.website;

  // Define the CTA buttons for the Hero section
  const heroCtaButtons = [
    // Find the original "Buy Shithead" button or create a default one
    sections.hero.ctaButtons.find((button: any) => button.text === "Buy Shithead") || {
      text: "Buy Shithead",
      link: "#", // Fallback link if not found
      primary: true,
    },
    { text: "Join Telegram", link: "https://t.me/goldenshitheads", primary: false },
    { text: "Join Twitter/X", link: "https://x.com/shithead_1111", primary: false },
  ].filter(Boolean); // Filter out any null/undefined entries

  // Update social links and filter out Reddit for the Community section
  const updatedSocials = sections.community.socials
    .filter((social: any) => social.platform !== "Reddit") // Filter out Reddit platform
    .map((social: any) => {
      if (social.platform === "Telegram") {
        return { ...social, link: "https://t.me/goldenshitheads" };
      }
      if (social.platform === "Twitter") {
        return { ...social, link: "https://x.com/shithead_1111" };
      }
      return social;
    });

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] bg-background text-foreground">
      <main className="flex flex-col items-center justify-center">
        {/* Hero Section */}
        <section id="hero" className="w-full py-20 px-4 text-center">
          {/* Shithead Image */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/shithead.png" // Path to your image in the public folder
              alt="Shithead Meme"
              width={250} // Set a base width
              height={250} // Set a base height to maintain 1:1 ratio
              className="rounded-full object-cover aspect-square" // Ensure 1:1 aspect ratio and rounded shape
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            {sections.hero.mainHeadline}
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-muted-foreground">
            {sections.hero.subHeadline}
          </h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl mb-8 text-muted-foreground">
            {sections.hero.paragraph}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {heroCtaButtons.map((button: any, index: number) => (
              <a
                key={index}
                href={button.link}
                className={`px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-200 ${
                  button.primary
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {button.text}
              </a>
            ))}
          </div>
        </section>

        {/* Banner Section */}
        <section id="banner" className="w-full px-4 py-10">
          <div className="relative w-full max-w-6xl mx-auto aspect-[3/1] overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/banner.png" // Ganti dengan path gambar banner Anda
              alt="Website Banner"
              fill // Mengisi container parent
              className="object-cover" // Memastikan gambar menutupi area tanpa terdistorsi
            />
          </div>
        </section>

        {/* Philosophy Section */}
        <section id="philosophy" className="w-full py-20 px-4 bg-card text-card-foreground">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            {sections.philosophy.title}
          </h2>
          <p className="max-w-4xl mx-auto text-lg md:text-xl text-center mb-12 text-muted-foreground">
            {sections.philosophy.paragraph}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {sections.philosophy.points.map((point: any, index: number) => (
              <div key={index} className="bg-popover p-6 rounded-lg shadow-md text-center">
                <h3 className="text-2xl font-semibold mb-3 text-primary">
                  {point.title}
                </h3>
                <p className="text-muted-foreground">{point.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Shitonomics Section */}
        <section id="shitonomics" className="w-full py-20 px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            {sections.shitonomics.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
            {sections.shitonomics.stats.map((stat: any, index: number) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-md">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <h3 className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </h3>
                <p className="text-muted-foreground">{stat.description}</p>
              </div>
            ))}
          </div>
          <p className="text-2xl md:text-3xl font-semibold text-accent-foreground">
            {sections.shitonomics.slogan}
          </p>
        </section>

        {/* Shitmap Section */}
        <section id="shitmap" className="w-full py-20 px-4 bg-card text-card-foreground">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            {sections.shitmap.title}
          </h2>
          <div className="max-w-5xl mx-auto space-y-12">
            {sections.shitmap.phases.map((phase: any, index: number) => (
              <div key={index} className="relative pl-8 md:pl-16">
                <div className="absolute left-0 top-0 h-full w-1 bg-primary rounded-full"></div>
                <div className="absolute left-[-10px] md:left-[-14px] top-0 w-6 h-6 md:w-8 md:h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm md:text-base">
                  {phase.phaseNumber}
                </div>
                <h3 className="text-3xl font-bold mb-4 text-primary">
                  {phase.title}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground">
                  {phase.tasks.map((task: any, taskIndex: number) => (
                    <li key={taskIndex}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* How To Buy Section */}
        <section id="how-to-buy" className="w-full py-20 px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            {sections.howToBuy.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
            {sections.howToBuy.steps.map((step: any, index: number) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-md">
                <div className="text-5xl font-bold text-primary mb-4">
                  {step.step}
                </div>
                <h3 className="text-2xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-muted p-6 rounded-lg max-w-2xl mx-auto mb-8">
            <p className="text-lg font-semibold mb-2">Contract Address:</p>
            <code className="block bg-input p-3 rounded-md text-lg break-all">
              {sections.howToBuy.contractAddress}
            </code>
          </div>
          <p className="text-xl md:text-2xl font-medium text-muted-foreground">
            {sections.howToBuy.closingText}
          </p>
        </section>

        {/* Community Section */}
        <section id="community" className="w-full py-20 px-4 bg-card text-card-foreground">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            {sections.community.title}
          </h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-center mb-12 text-muted-foreground">
            {sections.community.paragraph}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {updatedSocials.map((social: any, index: number) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground text-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
              >
                Join {social.platform}
              </a>
            ))}
          </div>
        </section>

        {/* Footer Section */}
        <footer className="w-full py-10 px-4 text-center bg-popover text-popover-foreground text-sm">
          <p className="max-w-4xl mx-auto text-muted-foreground">
            {sections.footer.disclaimer}
          </p>
        </footer>
      </main>
      <MadeWithDyad />
    </div>
  );
}