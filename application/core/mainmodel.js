class Model {
    constructor(_modelname, _fields, _pre, _conditional){
        this.model       = _modelname
        this.fields      = _fields
        this.pre         = _pre
        this.conditional = _conditional
        return this
    }
}
class QueryBuilder extends Model {
    constructor(_modelname, _fields, _pre, _conditional){
        super(_modelname, _fields, _pre, _conditional)
        this.sql = ""
    }
}
class Module extends Model {
    constructor(_modelname, _fields, _pre, _conditional){
        super(_modelname, _fields, _pre, _conditional)
        this.sql = ""
    }
    map = async () => {
        this.sql += `SELECT ${this.pre ? this.pre : ""} ${this.fields ? this.fields : ""} \nFROM ${this.model} \n`
        return this
    }
    extends = async (module_name, {key, constraint}={}, mode) =>{
        if(module_name.includes(" ")){
          key = module_name.split(" ")[1]+"."+key
        }
        this.sql += `${mode} JOIN ${module_name} ON ${key}=${constraint} \n`
        return this
      
    }
    order = async (field_name, sort_type='') => {
        this.sql += `ORDER BY ${field_name} ${sort_type} \n`
        return this
    }
    
    where = async (param) => {
        this.sql += `WHERE ${param} \n`
        return this
    }

    group = async(param = false) => {
        if(param == true){
            this.sql += `GROUP BY ${this.fields} \n`
            return this
        }
    }
    limit = async(offset, limit) => {
        this.sql += `OFFSET ${offset} ROWS FETCH NEXT ${limit} ROWS ONLY \n`
        return this
    }
    values = async (param) => {
        this.sql += `VALUES(${param})`
        return this
    }
    post = async(type) => {
        if(type=="insert"){
            this.sql += `INSERT INTO ${this.model} (${this.fields})\n`
            return this
        }
        if(type=="update"){
            this.sql += `UPDATE ${this.model} SET ${this.fields}\n`
            return this
        }
        if(type=="soft-delete"){
            this.sql += `UPDATE ${this.model} SET ROW_STATUS=0\n`
            return this
        }
        if(type=="hard-delete"){
            this.sql += `DELETE FROM ${this.model}\n`
            return this
        }
        
    }
    scope = async (param, scope) => {
        if(scope === "@insert_id"){
            this.sql += `SELECT @SCOPE_IDENTITY AS ${param}\n`
            return this
        }
    }
}

exports.Module = Module