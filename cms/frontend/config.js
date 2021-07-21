import { useState } from 'react'

const DEFAULT_CONFIG = {}

export const useConfig = () => {
  const [config] = useState(DEFAULT_CONFIG)
  return {
    config,
  }
}
