import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ParticlesOptions } from "./ParticlesOptions";

const ParticlesAuthorize = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, [])

  if (init) {
    return (
      <Particles id="tsparticles" options={ParticlesOptions} />
    );
  }

  return <></>
}

export default ParticlesAuthorize
