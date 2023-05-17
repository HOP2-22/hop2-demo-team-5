export const authToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIzZjU4ODIwNy0zZDY4LTQ3ZWEtOWI4ZC00ODZjOGRlYWY2YzkiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY4NDU5Mzg5NSwiZXhwIjoxNzE2MTI5ODk1fQ._jX96WOtGP9xL-krAJBZx6wqA8M9hpnBsQve8EJJISE";

// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  const { roomId } = await res.json();
  return roomId;
};
