import React, { useState } from 'react'
import { Rule, RuleContext } from './rule-context'

const RuleContextProvider: React.FC = props => {
    const [rule, setRule] = useState<Rule[]>([
        {
            nama: 'Choleris',
            member: ['P1','P2','P3','P4','P5'],
        },
        {
            nama: 'Melancholis',
            member: ['P6','P7','P8','P9','P10'],
        },
        {
            nama: 'Phlegmatis',
            member: ['P11','P12','P13','P14'],
        },
        {
            nama: 'Sangunis',
            member: ['P15','P16','P17','P18','P19'],
        },

    ])

    const tambahRule = (aturan: Rule) => {
        setRule((jwbnSekarang) => {
            return jwbnSekarang.concat(aturan)
        })
    }

    return (
        <RuleContext.Provider value={{
            rule,
            tambahRule,
        }}>
            {props.children}
        </RuleContext.Provider>
    )
}

export default RuleContextProvider