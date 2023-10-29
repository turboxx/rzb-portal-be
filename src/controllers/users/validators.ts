import createHttpError from 'http-errors';
import isEmail from 'validator/lib/isEmail';

import type { UsersCreateBody } from '../../types/routes/users';

export const validateCreateBody = (body: Partial<UsersCreateBody>) => {
    const { username, email, password } = body;

    if (!username) {
        throw createHttpError.BadRequest('Username required');
    }
    if (username.length < 5) {
        throw createHttpError.BadRequest('Username must contain at least 5 characters');
    }

    if (!email) {
        throw createHttpError.BadRequest('Email required');
    }
    if (!isEmail(email)) {
        throw createHttpError.BadRequest('Email is invalid');
    }

    if (!password) {
        throw createHttpError.BadRequest('Password required');
    }
    if (password.length < 8) {
        throw createHttpError.BadRequest('Password must contain at least 8 characters');
    }

    // As the function checked the properties are not missing,
    // return the body as original type
    return body as UsersCreateBody;
};