import Tab from '@/components/tab'
import styles from './App.less'
export const layout = { 
    logout: () => {}, // do something 
    rightRender:(initInfo)=> { return <Tab/>; },// return string || ReactNode; 
};