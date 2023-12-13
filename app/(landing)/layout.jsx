import LandingFooter from "@/components/landing-footer";

const LandingLayout = ({ children }) => {
  return (
    <>
      <main className="h-fit bg-[#111827]">
        <div className="mx-auto max-w-screen-xl h-full w-full">{children}</div>
      </main>
      <LandingFooter />
    </>
  );
};

export default LandingLayout;
