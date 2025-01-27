export const codeExamplesData = {
    store: `import { ACTION_TYPE } from "../action";

const initialAppState = {
  wasLogout: false,
  modal: {
    isOpen: false,
    text: '',
    onConfirm: () => { },
    onCancel: () => { },
  }
};

export const appReducer = (state = initialAppState, action) => {
  switch (action.type) {
    case ACTION_TYPE.LOGOUT:
      return {
        ...state,
      
        wasLogout: true,
      };
    case ACTION_TYPE.OPEN_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          ...action.payload,
          isOpen: true,
        },

      };
    case ACTION_TYPE.CLOSE_MODAL:
      return initialAppState;

    default:
      return state;
  }
};`,
    auth: `import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthFormError, Button, H2, Input } from "../../components";
import { useResetForm } from "../../hooks";
import { setUser, setCart, setFavorites } from "../../action";
import { selectUserRole } from "../../selectors";
import { ROLE } from "../../constans/role";
import { AuthorizationContainer, StyledLink } from "./style";
import { request } from "../../utils/request";

const authFormSchema = yup.object().shape({
  login: yup
    .string()
    .required("Заполните логин")
    .matches(
      /^\w+$/,
      "Неверно заполнен логин. Допускаются только буквы и цифры"
    )
    .min(3, "Неверно заполнен логин. Минимум 3 символа")
    .max(15, "Неверно заполнен логин. Максимум 15 символов"),
  password: yup
    .string()
    .required("Заполните пароль")
    .matches(
      /^[\w#%]+$/,
      "Неверно заполнен пароль. Допускаются буквы, цифры и знаки # %"
    )
    .min(6, "Неверно заполнен пароль. Минимум 6 символов")
    .max(30, "Неверно заполнен пароль. Максимум 30 символов"),
});

export const Authorization = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
    resolver: yupResolver(authFormSchema),
  });

  const [serverError, setServerError] = useState(null);
  const dispatch = useDispatch();

  const roleId = useSelector(selectUserRole);

  useResetForm(reset);

  const onSubmit = ({ login, password }) => {
    request("/api/login", "POST", { login, password })
      .then(({ error, user }) => {
        if (error) {
          setServerError(&#96;Ошибка запроса: ${"error"}&#96;);
          return;
        }

        dispatch(setUser(user));
        sessionStorage.setItem("userData", JSON.stringify(user));
        Promise.all([
          request(&#96;/api/carts/${"user.id"}&#96;, "GET"),
          request(&#96;/api/favorites/${"user.id"}&#96;, "GET")
        ])
        .then(([cartResponse, favoritesResponse]) => {
          if (cartResponse.error || favoritesResponse.error) {
            
            console.error(&#96;Ошибка загрузки данных: ${"cartResponse.error || favoritesResponse.error"}&#96;);
            return;
          }
          dispatch(setCart(cartResponse));
          sessionStorage.setItem("cartData", JSON.stringify(cartResponse));
          dispatch(setFavorites(favoritesResponse.favorite));
          sessionStorage.setItem("favoritesData", JSON.stringify(favoritesResponse.favorite));
        })
          .catch((fetchError) => {
            console.error(
              "Ошибка при загрузке данных корзины или избранного:",
              fetchError
            );
          });
      })
      .catch((authError) => {
        setServerError(&#96;Ошибка авторизации: ${"authError"}&#96;);
      });
  };

  const formError = errors?.login?.message || errors?.password?.message;
  const errorMessage = formError || serverError;

  if (roleId !== ROLE.GUEST) {
    return <Navigate to="/" />;
  }
  return (
    <AuthorizationContainer>
      <H2>Авторизация</H2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Логин..."
          {...register("login", {
            onChange: () => setServerError(null),
          })}
        />
        <Input
          type="password"
          placeholder="Пароль..."
          {...register("password", {
            onChange: () => setServerError(null),
          })}
        />
        <Button type="submit" disabled={!!formError}>
          Авторизоваться
        </Button>
        {errorMessage && <AuthFormError>{errorMessage}</AuthFormError>}
        <StyledLink>
          <Link to="/register">Регистрация </Link>
        </StyledLink>
      </form>
    </AuthorizationContainer>
  );
};;`,
    request: `export function request(url, method, data) {
    return fetch(url, {
        headers: {
            "content-type": "application/json"
        },
        method: method || "GET",
        body: data ? JSON.stringify(data) : undefined,
    }).then(res => res.json())
}`,

    icon: `import styled from 'styled-components';


const IconWrapper = styled.div&#96;
  width: ${"(props) => props.size || '30px'"};
  height: ${"(props) => props.size || '40px'"};
  color: ${"(props) => props.color || 'black'"};
  margin: ${"(props) => props.margin || '0 auto'"};
  border: ${"(props) => props.border || '1 px solid'"};
  border-radius: ${"(props) => props.borderRadius || '2px'"};
  

  &:hover {
    color: ${"(props) => props.hoverColor || 'gray'"};
  }

  svg {
    width: 100%;
    height: 100%;
  }
&#96;;


export const Icon = ({ icon: IconComponent, size, color, hoverColor, margin, onClick, border, borderRadius }) => {
  return (
    <IconWrapper size={size} color={color} hoverColor={hoverColor} margin={ margin} onClick={onClick} border={border} borderRadius={borderRadius}>
      <IconComponent />
    </IconWrapper>
  );
};`,
    addProduct: `import { request } from "../utils/request";
import { setCart } from "./set-cart";

export const addProductToCart = (productId, count, userId, ) => async (dispatch) => {

    try {
      const response = await request('/api/cart', 'POST', { productId,count, userId });
      dispatch(setCart(response.cartItem)); 
    } catch (error) {
      console.error('Ошибка добавления товара в корзину:', error);
    }
  };`,

cart: ` const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = require('./User');
const Product = require('./Product');

const Cart = sequelize.define('cart', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        },
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Product,
            key: 'id',
        },
    },
    count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },

}, {
    tableName: 'carts',
});


module.exports = Cart;`,
login: `app.post('/login', async (req, res) => {
    try {
        const { login: userLogin, password } = req.body;
        const { user, token } = await login(userLogin, password);
        res.cookie('token', token, { httpOnly: true });
        res.send({ error: null, user: mapUser(user) });
    } catch (error) {
        res.status(401).send({ error: error.message || "Unknown error" });
    }
});`
};