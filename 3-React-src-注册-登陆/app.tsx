import Tab from '@/components/tab'
export const layout = { 
    logout: () => {}, // do something 
    rightRender:(initInfo)=> { return <Tab/>; },// return string || ReactNode; 
};