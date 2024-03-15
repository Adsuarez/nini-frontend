import { readFile, writeFile } from "node:fs/promises";
import { Buffer } from "node:buffer";

let PROGRAMS_D76;

try {
  const filePath = new URL("./programs-all-d76.json", import.meta.url);
  const contents = await readFile(filePath, { encoding: "utf8" });
  const ALL_PROGRAMS_D76 = JSON.parse(contents);

  PROGRAMS_D76 = ALL_PROGRAMS_D76.filter(
    (program) => program.nombreestadoprograma === "Activo"
  );
} catch (err) {
  console.error(err.message);
}

try {
  const filePath = new URL("./programs-actives-d76.json", import.meta.url);
  const data = new Uint8Array(Buffer.from(JSON.stringify(PROGRAMS_D76)));
  await writeFile(filePath, data);
} catch (err) {
  console.error(err);
}
