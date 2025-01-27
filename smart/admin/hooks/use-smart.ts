import { useStore } from '../store'

export function useSmart() {
  return {
    ...useStore(),
  }
}
