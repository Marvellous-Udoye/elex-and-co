function renderAnimatedText(text: string) {
  return text.split('').map((char, index) => (
    <span
      className={`hero-char${char === ' ' ? ' hero-space' : ''}`}
      key={`${text}-${index}`}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ))
}

export function HeroSection() {
  return (
    <section className="page-1 relative min-h-screen w-full overflow-x-hidden overflow-y-visible pt-[17vw] max-[500px]:mb-[16vw] max-[500px]:min-h-[70px] max-[500px]:pb-0">
      <div className="w-full px-[1.5vw] max-[800px]:pt-[10vw] max-[500px]:h-full max-[500px]:w-full max-[500px]:px-[4vw] max-[500px]:pt-[45%] max-[500px]:pb-0">
        <div
          id="head"
          className="hero-text-render mb-[10px] overflow-visible [perspective:500px]"
        >
          <h1
            id="course"
            data-hero-group
            className="font-hero text-[15vw] uppercase leading-[15vw] tracking-[-10px] text-[var(--brand-color)] max-[500px]:max-w-full max-[500px]:text-[15vw] max-[500px]:leading-[14.5vw] max-[500px]:tracking-[-4px]"
          >
            {renderAnimatedText('Distinct')}
          </h1>
          <h1 className="font-hero text-[15vw] uppercase leading-[15vw] tracking-[-10px] text-[var(--brand-color)] max-[500px]:max-w-full max-[500px]:text-[15vw] max-[500px]:leading-[14.5vw] max-[500px]:tracking-[-4px]">
            <span id="the" data-hero-group className="inline-block">
              {renderAnimatedText('& Radiant')}
            </span>
            <span id="course-head" data-hero-group className="block">
              {renderAnimatedText('Essentials.')}
            </span>
          </h1>
        </div>

        <div className="video_container relative flex w-full cursor-pointer items-center justify-center overflow-hidden h-[42rem] max-h-[80vh] max-[800px]:h-[32rem] max-[600px]:h-[24rem] max-[500px]:h-[18rem]">
          {/* <div
            id="play"
            className="fixed scale-0 rounded-full bg-[var(--brand-color)] p-[3.2vw] font-brand text-[1.2vw] uppercase text-white opacity-0 max-[500px]:absolute max-[500px]:scale-100 max-[500px]:p-[12vw] max-[500px]:text-[5vw] max-[500px]:opacity-100"
          >
            PLAY
          </div> */}
          <img
            id={"hero section"}
            // src={"/hero-bg.png"}
            src={
              "https://images.pexels.com/photos/35270128/pexels-photo-35270128.jpeg?auto=compress&cs=tinysrgb&w=1600"
            }
            // alt={"Ilham Store"}
            alt={"Jewelry storefront hero"}
            className="h-full w-full bg-black object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  )
}
