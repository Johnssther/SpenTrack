import { UserAuthApi, UserAuth } from "../../domain/entities/user.entity";

/**
 * Converts user authentication API data into a UserAuth object.
 * @param userApi The user authentication API data.
 * @returns A UserAuth object.
 */
export const UserAuthAdapter = async (userApi: UserAuthApi): Promise<UserAuth> => {
  try {
    const { user, access_token } = userApi;

    // Destructure user data
    const { id, name, username, password } = user;

    // Return a UserAuth object with the destructured data
    return { id, name, username, password, auth: true, access_token };
  } catch (error) {
    // Handle any errors that occur during conversion
    console.error("Error converting user data:", error);
    throw new Error("Error converting user data");
  }
};
