import React, {useState} from 'react'
import {authReq} from '@/services'
import { useRequest } from 'umi';
export default function useAuth () {
    const {data} = useRequest(() => authReq())
    if (!data) return <div>loading..</div>
    return data;
}