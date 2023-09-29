import Ajv, {

} from "ajv"


const ajv = new Ajv()

const validator = (schema: object) => {
    const compiler = ajv.compile(schema);
    return (value: any) => compiler(value)
}

export { validator };
