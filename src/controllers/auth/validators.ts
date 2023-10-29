import createHttpError from 'http-errors';

import type { AuthLoginBody } from '../../types/routes/auth';

export const validateLoginBody = (body: Partial<AuthLoginBody>) => {
    const { login, password } = body;

    if (!login) {
        throw createHttpError.BadRequest('Username or email address required');
    }

    if (!password) {
        throw createHttpError.BadRequest('Password required');
    }

    // As the function checked the properties are not missing,
    // return the body as original type
    return body as AuthLoginBody;
};