"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const testimonials = [
  {
    name: "Tarachand",
    avatar: "A",
    title: "Software Engineer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor",
  },
  {
    name: "Tarachand",
    avatar: "A",
    title: "Software Engineer",
    description: "This is the best application I've used! Amazing!",
  },
  {
    name: "Tarachand",
    avatar: "A",
    title: "Software Engineer",
    description: "This is the best application I've used! Nice!",
  },
  {
    name: "Tarachand",
    avatar: "A",
    title: "Software Engineer",
    description: "This is the best application I've used! Excellent!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-16 md:pb-56 h-fit">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
      {/* <section className="p-10 md-p-l5">
        <div id="slider-2">
          <div className="px-3">
            {testimonials.map((review, index) => (
              <div
                key={index}
                className="p-8 rounded-lg bg-indigo-lightest-10 relative"
              >
                <span className="text-xl text-white opacity-10 absolute top-0 -z-1">
                  &#10077;
                </span>
                <p className="font-semibold text-lg text-indigo-lightest opacity-80 italic tracking-wider">
                  {review.description}
                </p>
                <div className="flex items-center my-5">
                  <div className="block rounded-full border border-black border-4 w-12 h-12">
                    <img
                      className="rounded-full"
                      src="https://randomuser.me/api/portraits/men/46.jpg"
                      alt="user-img"
                    />
                  </div>
                  <div className="ml-4 text-sm">
                    <div className="text-indigo-lightest">{review.name}</div>
                    <div className="text-indigo-lightest opacity-20">
                      {review.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};
