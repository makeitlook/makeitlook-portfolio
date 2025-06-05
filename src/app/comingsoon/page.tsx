import SEO from "@/components/SEO/SEO";

export default function ComingSoon() {
  return (
    <>
      <SEO
        title="Coming Soon"
        description="This page is under construction and will be available soon."
        url="https://makeitlook.co.uk/comingsoon"
        image="/images/og-image.png"
      />
      <main className="grid place-items-center min-h-[90dvh] bg-card-background px-6">
      <div className="text-center">
        <p className="text-base font-semibold text-elements-primary-main">
          Coming Soon
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl">
          Page Under Construction
        </h1>
      </div>
      </main>
    </>
  );
}
