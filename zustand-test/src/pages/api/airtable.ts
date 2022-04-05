import Airtable from "airtable";

type MonsterInfo = {
  id: string;
  name: string;
};

const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } = process.env;
const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID as string);

const monstersTable = base("Monsters");

export { monstersTable };

export async function getMonsters(): Promise<Array<MonsterInfo>> {
  const rows = await monstersTable.select().firstPage();

  return rows.reduce((items, record) => {
    items.push({
      id: record.id as string,
      name: record.get("name") as string,
    });

    return items;
  }, [] as MonsterInfo[]);
}
