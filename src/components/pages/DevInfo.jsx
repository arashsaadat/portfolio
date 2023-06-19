import { Typography } from "@mui/material";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";

const Info = ({ children }) => {
    return (
        <Typography
            variant="body1"
            color="black"
            textAlign="left"
            sx={{ mt: 2 }}
        >
            {children}
            <KeyboardArrowLeftRounded
                sx={{
                    verticalAlign: "bottom",
                    color: "primary.main",
                }}
            />
        </Typography>
    );
};

const DevInfo = () => {
    return (
        <>
            <Info>نام و نام خانوادگی : آرش سعادتمند</Info>
            <Info>سن : ۲۸</Info>
            <Info>شهر : قم</Info>
            <Info>arash.local@gmail.com : آدرس ایمیل</Info>
            <Info>شماره موبایل : ۰۹۱۹۲۹۰۲۶۰۲</Info>
        </>
    );
};

export default DevInfo;
