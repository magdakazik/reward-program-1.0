import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react'

import calculatePoints from './calculatePoints'

describe('calculatePoints', () => {
    test('calculates valid number of points', ()=> {
      expect(calculatePoints([{username: 'User1', date: '12/12/2023', value: 55}, {username: 'User1', date: '12/12/2022', value: 150}, {username: 'User2', date: '10/11/2023', value: 49},
    {username: 'User3', date: '10/10/2023', value: 120}])).toStrictEqual({"User1": {"username": "User1", "value": 55}, "User3": {"username": "User3", "value": 120}})  
    })
})