/**
 * Check that studiely.com and www.studiely.com resolve to the VPS IPv4.
 * Run before certbot: EXPECTED_VPS_IP=187.124.250.67 npm run check:vps-dns
 */
import dns from "node:dns/promises";

const expected = (process.env.EXPECTED_VPS_IP || "187.124.250.67").trim();
const hosts = ["studiely.com", "www.studiely.com"];

async function main() {
  let ok = true;
  for (const host of hosts) {
    try {
      const v4 = await dns.resolve4(host);
      const match = v4.includes(expected);
      console.log(`${host} A → ${v4.join(", ")}  ${match ? "OK" : "(expected " + expected + ")"}`);
      if (!match) ok = false;
    } catch (e) {
      console.error(`${host}:`, e.message);
      ok = false;
    }
  }
  if (!ok) {
    console.error(
      "\nDNS does not point to the VPS yet. Add A records for @ and www to",
      expected,
      "then run this again before certbot."
    );
    process.exit(1);
  }
  console.log("\nDNS looks good for Let’s Encrypt HTTP-01.");
}

main();
