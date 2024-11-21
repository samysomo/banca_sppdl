
import React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select'

const SelectProvider = ({providers} : {providers : Provider[] | null}) => {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select your provider" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel className='bg-white'>Providers</SelectLabel>
          {providers && providers.map((provider) => (
            <SelectItem value={provider.providerName} className='bg-white' key={provider.providerName}>
                {provider.providerName}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectProvider