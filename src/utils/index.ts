export function deepMerge(src: any = {}, target: any = {}) {
    return {
      ...src,
      ...target,
    }
}