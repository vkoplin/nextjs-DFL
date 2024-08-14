"use client";

import { IconButton, Button, Typography } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/solid";

function Hero() {
  return (
    <div className="grid grid-rows-4 grid-flow-col gap-4">
     <div className= "row-span-1 relative min-h-screen bg-[url('/image/Football.jpg')] bg-cover bg-nrepeat">
     <div className="absolute inset-0 h-full bg-gray-900/60" />
     <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <Typography variant="h3" color="yellow" className="mb-2">
          This season, you own the team
        </Typography>
        <Typography variant="h1" color="white" className="lg:max-w-3xl">
          DFL: Unlocking the Future
        </Typography>
        <Typography
          variant="lead"
          color="white"
          className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl"
        >
          Decentralized Football League - 2026!
        </Typography>
        <div className="flex items-center gap-4">
          <Button variant="gradient" color="white">
            Get started
          </Button>
          <IconButton className="rounded-full bg-white p-6">
            <PlayIcon className="h-4 w-4 text-gray-900" />
          </IconButton>
        </div>
      </div>
    </div>
  </div>
  <div className=" col-span-2 relative min-h-screen bg-[url('/image/Football.jpg')] bg-cover bg-nrepeat">
     <div className="absolute inset-0 h-full bg-gray-900/60" />
     <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <Typography variant="h3" color="yellow" className="mb-2">
          This season, you own the team
        </Typography>
        <Typography variant="h1" color="white" className="lg:max-w-3xl">
          DFL: Unlocking the Future
        </Typography>
        <Typography
          variant="lead"
          color="white"
          className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl"
        >
          Decentralized Football League - 2026!
        </Typography>
        <div className="flex items-center gap-4">
          <Button variant="gradient" color="white">
            Get started
          </Button>
          <IconButton className="rounded-full bg-white p-6">
            <PlayIcon className="h-4 w-4 text-gray-900" />
          </IconButton>
        </div>
      </div>
    </div>
  </div>
  <div className="row-span-3 col-span-2 relative min-h-screen bg-[url('/image/Football.jpg')] bg-cover bg-nrepeat">
     <div className="absolute inset-0 h-full bg-gray-900/60" />
     <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <Typography variant="h3" color="yellow" className="mb-2">
          This season, you own the team
        </Typography>
        <Typography variant="h1" color="white" className="lg:max-w-3xl">
          DFL: Unlocking the Future
        </Typography>
        <Typography
          variant="lead"
          color="white"
          className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl"
        >
          Decentralized Football League - 2026!
        </Typography>
        <div className="flex items-center gap-4">
          <Button variant="gradient" color="white">
            Get started
          </Button>
          <IconButton className="rounded-full bg-white p-6">
            <PlayIcon className="h-4 w-4 text-gray-900" />
          </IconButton>
        </div>
      </div>
    </div>
  </div>
  <div className= "row-span-4 relative min-h-screen bg-[url('/image/Football.jpg')] bg-cover bg-nrepeat">
     <div className="absolute inset-0 h-full bg-gray-900/60" />
     <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <Typography variant="h3" color="yellow" className="mb-2">
          This season, you own the team
        </Typography>
        <Typography variant="h1" color="white" className="lg:max-w-3xl">
          DFL: Unlocking the Future
        </Typography>
        <Typography
          variant="lead"
          color="white"
          className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl"
        >
          Decentralized Football League - 2026!
        </Typography>
        <div className="flex items-center gap-4">
          <Button variant="gradient" color="white">
            Get started
          </Button>
          <IconButton className="rounded-full bg-white p-6">
            <PlayIcon className="h-4 w-4 text-gray-900" />
          </IconButton>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
}

export default Hero;
