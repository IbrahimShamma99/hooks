import Ajv, {
    JSONSchemaType
} from "ajv"


const ajv = new Ajv()

function validator<T>(schema: JSONSchemaType<T>) {
    const compiler = ajv.compile(schema);
    return (value: any) => compiler(value)
}

export { validator, JSONSchemaType };
