import styles from '@/styles/main.module.scss'
import {Hero, Filter, Recommended} from '@/components';
import {performRequest} from '@/lib/datocms';
import { HOME_SLIDER} from '@/queries';

export default async function Home() {
    const { data: { allHomeSliders } } = await performRequest({ query: HOME_SLIDER });

  return (
    <main className={styles.main}>
        <Hero slides={allHomeSliders}/>
        <Filter/>
        <Recommended/>
    </main>
  )
}
