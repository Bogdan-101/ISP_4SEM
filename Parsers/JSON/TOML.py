from Parser import Parser
from JSON import JSON
import toml


class TOML(Parser):
    @staticmethod
    def serialize(obj):
        str_json = JSON.serialize(obj)
        obj_json = JSON.parse(str_json, isBuffer=True)
        str = toml.dumps(obj_json)
        return str

    @staticmethod
    def parse(str):
        raw_obj = toml.loads(str)
        for key in raw_obj:
            if type(raw_obj[key]) is not int and "code" in raw_obj[key]:
                func_object = {}
                exec(raw_obj[key]["code"], {}, func_object)
                raw_obj[key] = func_object[raw_obj[key]["func_name"]]
            elif type(raw_obj[key]) is not int and "classname" in raw_obj[key]:
                attr_dict = {}
                if raw_obj[key]["attrs"] != 'None' and raw_obj[key]["attrs"] != {}:
                    for attr in raw_obj[key]["attrs"]:
                        attr_dict[attr] = raw_obj[key]["attrs"][attr]
                if raw_obj[key]["funcs"] != 'None' and raw_obj[key]["attrs"] != {}:
                    for func in raw_obj[key]["funcs"]:
                        attr_dict[func] = raw_obj[key]["funcs"][func]
                raw_obj[key] = type(
                    raw_obj[key]["classname"],
                    (),
                    attr_dict
                )
        return raw_obj
