import ALL_PROGRAMS_VALLE_DEL_CAUCA from "./programas-valledelcauca.json" assert { type: "json" };

const ACTIVES_PROGRAMS_VALLE_DEL_CAUCA = ALL_PROGRAMS_VALLE_DEL_CAUCA.filter(
  (program) => program.nombreestadoprograma === "Activo"
);
console.log(ACTIVES_PROGRAMS_VALLE_DEL_CAUCA);
//TODO create system to create file with result of filter
