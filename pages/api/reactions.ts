import fs from 'fs';
import path from 'path';

// obtains the path to the .json file
const dataFilePath = path.join(process.cwd(), 'data/reactions.json');

// obtains the data from the .json file
const getData = () => {
  const data = fs.readFileSync(dataFilePath, 'utf8');
  return JSON.parse(data);
};

// rewrites the .json file with new data
const writeData = (data: any) => {
  const jsonString = JSON.stringify(data, null, 2);
  fs.writeFileSync(dataFilePath, jsonString, 'utf8');
};

// Next.js API route
export default (
  req: {
    method: string;
    body: { slug: any; type: any };
    query: { slug: any; type: any };
  },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: {
        (arg0: { message?: string; reactions?: number }): {
          (): any;
          new (): any;
          reactions: any;
        };
        new (): any;
      };
      end: { (): void; new (): any };
    };
  }
) => {
  if (req.method === 'POST') {
    const { slug, type } = req.body;
    let data = getData();

    // find the matching reaction object based on slug and type
    const index = data.findIndex(
      (item: { slug: any; type: any }) =>
        item.slug === slug && item.type === type
    );

    if (index >= 0) {
      // if found, increase the count
      data[index].reactions += 1;
    } else {
      // if not found, create a new object
      data.push({
        slug,
        type,
        reactions: 1,
      });
    }

    writeData(data);

    res.status(200).json({ message: 'Reaction count updated.' });
  } else if (req.method === 'GET') {
    const { slug, type } = req.query;
    const data = getData();

    // find the matching reaction object based on slug and type
    const reactionObj = data.find(
      (item: { slug: any; type: any }) =>
        item.slug === slug && item.type === type
    );

    if (reactionObj) {
      res.status(200).json({ reactions: reactionObj.reactions });
    } else {
      res.status(200).json({ reactions: 0 });
    }
  } else {
    res.status(405).end(); //Method Not Allowed
  }
};
