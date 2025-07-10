from enum import Enum


class StrEnum(str, Enum):
    # 代替 from enum import StrEnum，否则Python版本低于3.11会报错
    def __str__(self):
        return self.value

    @staticmethod
    def _generate_next_value_(name, start, count, last_values):
        return name  # 默认使用成员名作为值（可选）


class EnumBase(Enum):
    @classmethod
    def get_member_values(cls):
        return [item.value for item in cls._member_map_.values()]

    @classmethod
    def get_member_names(cls):
        return [name for name in cls._member_names_]


class MethodType(StrEnum):
    GET = "GET"
    POST = "POST"
    PUT = "PUT"
    DELETE = "DELETE"
    PATCH = "PATCH"
