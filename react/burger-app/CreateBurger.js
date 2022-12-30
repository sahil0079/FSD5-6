import React from "react";
import BreadUpper from "./BurgerComponents/BreadUpper/BreadUpper";
import BreadLower from "./BurgerComponents/BreadLower/BreadLower";
import { BurgerComponentEnum } from "./Resources";
import Cheese from "./BurgerComponents/Cheese/Cheese";
import Lettuce from "./BurgerComponents/Lettuce/Lettuce";
import Tomatoes from "./BurgerComponents/Tomatoes/Tomatoes";

function CreateBurger(props) {

    const BurgerStack = props.burgerStack.map((item, index) => {

        switch (item) {

            case BurgerComponentEnum.CHEESE:
                return <Cheese />
            case BurgerComponentEnum.LETTUCE:
                return <Lettuce />
            case BurgerComponentEnum.TOMATOES:
                return <Tomatoes />
            default:
                return null
        }

    })



    return (
        <div style={{ padding: '12% 25%' }}>
            <BreadUpper />
            {BurgerStack}
            <BreadLower />
        </div>)
}

export default CreateBurger