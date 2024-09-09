import { z } from "zod";

export const validationSchema = z.object({
    name:z
    .string()
    .min(1,"入力してください"),
    price:z
    .coerce
    .number()
    .min(100,"100円以上の価格を設定"),
    quantity:z
    .coerce
    .number()
    .min(0,"数字を設定"),
    description:z
    .string()

})
