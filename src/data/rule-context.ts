import React from 'react'

export interface Rule {
    nama: string,
    member: string[],
}

interface RuleContext {
    rule: Rule[],
    tambahRule: (rule: Rule) => void,
}

export const RuleContext = React.createContext<RuleContext>({
    rule: [],
    tambahRule: () => {},
})