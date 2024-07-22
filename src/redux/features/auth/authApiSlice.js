import { baseApi } from "../../baseApiSlice";

const authApiSlice = baseApi.injectEndpoints({
	overrideExisting: true,
	endpoints: (builder) => ({
		// activation
		usersActivation: builder.mutation({
			query: ({ uid, token }) => ({
				url: "/api/users/activation/",
				method: "POST",
				body: { uid, token },
			}),
		}),

		// resetPassword
		resetPassword: builder.mutation({
			query: (email) => ({
				url: "api/users/reset_password/",
				method: "POST",
				body: { email },
			}),
		}),

		// resetPasswordConfirm
		resetPasswordConfirm: builder.mutation({
			query: ({ uid, token, new_password, re_new_password }) => ({
				url: "api/users/reset_password_confirm/",
				method: "POST",
				body: { uid, token, new_password, re_new_password },
			}),
		}),

		jwtCreate: builder.mutation({
			query: ({ email, password }) => ({
				url: "/api/jwt/create/",
				method: "POST",
				body: { email, password },
			}),
		}),
		userCreate: builder.mutation({
			query: ({
				first_name,
				last_name,
				email,
				password,
				re_password,
			}) => ({
				url: "/api/users/",
				method: "POST",
				body: { first_name, last_name, email, password, re_password },
			}),
		}),

		// googleAuthenticate
		googleAuthenticate: builder.mutation({
			query: ({ state, code }) => ({
				url: `api/o/google-oauth2/?state=${state}&code=${code}`,
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/x-www-form-urlencoded",
				},
			}),
		}),
		// logout
		logout: builder.mutation({
			query: () => ({
				url: "/api/logout/",
				method: "POST",
			}),
		}),
	}),
});

export const {
	useJwtCreateMutation,
	useUserCreateMutation,
	useUsersActivationMutation,
	useResetPasswordMutation,
	useResetPasswordConfirmMutation,
	useGoogleAuthenticateMutation,
	useLogoutMutation,
} = authApiSlice;
