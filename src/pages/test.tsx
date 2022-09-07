import { m } from 'framer-motion';
// next
import NextLink from 'next/link';
// @mui

// layouts
import Layout from '../layouts';
// components
import Page from '../components/Page';

import LoadingScreen from 'src/components/LoadingScreen';

// ----------------------------------------------------------------------



// ----------------------------------------------------------------------

Test.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout variant="logoOnly">{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Test() {
    return (
        <Page title="Loading">
            <LoadingScreen />

        </Page>
    );
}
