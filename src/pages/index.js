import React from 'react';
import Link from 'next/link';
import {
  Anchor,
  grommet,
  Grommet,
  Page,
  PageContent,
  PageHeader,
  Paragraph,
} from 'grommet';
import { FormNext } from 'grommet-icons';

const Index = () => (
  <Grommet theme={grommet} full>
    <Page>
      <PageContent>
        <PageHeader
          title="Hello!"
          description={`Hopefully this template helps jumpstart your project. 
        This app is setup to integrate Grommet with Next.js.`}
        />
        <Paragraph>
          For help with grommet, check out the{' '}
          <Anchor
            href="https://v2.grommet.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            grommet documentation
          </Anchor>
          .
        </Paragraph>
        <Paragraph>
          For help with Next.js, check out the{' '}
          <Anchor
            href="https://nextjs.org/docs/getting-started"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js documentation
          </Anchor>
          .
        </Paragraph>
        <Paragraph>
          Want to improve this starter?{' '}
          <Anchor
            href="https://github.com/taysea/grommet-nextjs-starter"
            target="_blank"
            rel="noopener noreferrer"
            label="File an issue or contribute"
          />
          !
        </Paragraph>
        {/* Need to pass href because of:
         * https://github.com/zeit/next.js/#forcing-the-link-to-expose-href-to-its-child */}
        <Link href="/secondpage" passHref>
          <Anchor
            alignSelf="start"
            label="Second page"
            icon={<FormNext />}
            reverse
          />
        </Link>
      </PageContent>
    </Page>
  </Grommet>
);

export default Index;
