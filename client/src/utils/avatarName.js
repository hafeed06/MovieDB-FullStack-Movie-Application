export const avatarName = (username) => {
        const x = username.split(" ")
        const initials = x[0].charAt(0) + x[1].charAt(0)
        return initials
}