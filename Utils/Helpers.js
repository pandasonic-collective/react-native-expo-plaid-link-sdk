const Helpers = {
    upperCaseFirst: (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
}
export default Helpers
