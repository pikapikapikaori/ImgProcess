export default {
    methods: {
        isInteger(n) {
            return Number.isInteger(n)
        },
        isFloat(f) {
            let tmp = parseInt(f);
            if (!Number.isInteger(tmp)){
                return false
            }

            if (Number.isInteger(f)){
                return true
            }

            return f === +f && f !== (f|0);
        }
    }
}