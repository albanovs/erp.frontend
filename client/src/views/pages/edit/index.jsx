import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import TotalIncomeLightCard from 'views/dashboard/TotalIncomeLightCard';
import SimCardIcon from '@mui/icons-material/SimCard';
import { NavLink } from 'react-router-dom';

export default function Edits() {

    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    }, []);

    return (
        <Grid item xs={12}>
            <h1 className='mb-5 font-semibold'>Слоты & Головной отдел </h1>
            <Box
                display="flex"
                justifyContent="space-between"
                flexDirection={{ xs: "column", lg: "row" }}
                gap={2}
            >
                <Box flex={1} width={{ xs: "100%", lg: "auto" }}>
                    <TotalIncomeLightCard
                        isLoading={isLoading}
                        total={"Инстаграм слоты"}
                        icon={<InstagramIcon fontSize="inherit" />}
                    />
                </Box>
                <Box flex={1} width={{ xs: "100%", lg: "auto" }}>
                    <TotalIncomeLightCard
                        isLoading={isLoading}
                        total={"Телеграм слоты"}
                        icon={<TelegramIcon fontSize="inherit" />}
                    />
                </Box>
                <Box flex={1} width={{ xs: "100%", lg: "auto" }}>
                    <TotalIncomeLightCard
                        isLoading={isLoading}
                        total={"SIM головной отдел"}
                        icon={<TelegramIcon fontSize="inherit" />}
                    />
                </Box>
            </Box>
            <h1 className='mb-5 mt-5 font-semibold'>SIM карты байеров и старших менеджеров </h1>
            <Box
                display="flex"
                justifyContent="space-between"
                flexDirection={{ xs: "column", lg: "row" }}
                gap={2}
            >
                <Box flex={1} width={{ xs: "100%", lg: "auto" }}>
                    <NavLink to='leader-simcard'>
                        <TotalIncomeLightCard
                            isLoading={isLoading}
                            total={"Лидер"}
                            icon={<SimCardIcon fontSize="inherit" />}
                        />
                    </NavLink>
                </Box>
                <Box flex={1} width={{ xs: "100%", lg: "auto" }}>
                    <NavLink to='liberty-simcard'>
                        <TotalIncomeLightCard
                            isLoading={isLoading}
                            total={"Либерти"}
                            icon={<SimCardIcon fontSize="inherit" />}
                        />
                    </NavLink>
                </Box>
                <Box flex={1} width={{ xs: "100%", lg: "auto" }}>
                    <NavLink to='monaco-simcard'>
                        <TotalIncomeLightCard
                            isLoading={isLoading}
                            total={"Монако"}
                            icon={<SimCardIcon fontSize="inherit" />}
                        />
                    </NavLink>
                </Box>
            </Box>
            <Box
                display="flex"
                justifyContent="space-between"
                flexDirection={{ xs: "column", lg: "row" }}
                gap={2}
                marginTop='10px'
            >
                <Box flex={1} width={{ xs: "100%", lg: "auto" }}>
                    <NavLink to='turan-simcard'>
                        <TotalIncomeLightCard
                            isLoading={isLoading}
                            total={"Туран"}
                            icon={<SimCardIcon fontSize="inherit" />}
                        />
                    </NavLink>
                </Box>
                <Box flex={1} width={{ xs: "100%", lg: "auto" }}>
                    <NavLink to='ilyas-simcard'>
                        <TotalIncomeLightCard
                            isLoading={isLoading}
                            total={"Ильяс"}
                            icon={<SimCardIcon fontSize="inherit" />}
                        />
                    </NavLink>
                </Box>
                <Box flex={1} width={{ xs: "100%", lg: "auto" }}>
                    <NavLink to='sm-simcard'>
                        <TotalIncomeLightCard
                            isLoading={isLoading}
                            total={"Старшие менеджеры"}
                            icon={<SimCardIcon fontSize="inherit" />}
                        />
                    </NavLink>
                </Box>
            </Box>
            <h1 className='mb-5 mt-5 font-semibold'>SIM карты старших админов, помощники админов, админы, логисты</h1>
            <Box
                display="flex"
                justifyContent="space-between"
                flexDirection={{ xs: "column", lg: "row" }}
                gap={2}
            >
                <Box flex={1} width={{ xs: "100%", lg: "auto" }}>
                    <NavLink to='leader-simcard-admin'>
                        <TotalIncomeLightCard
                            isLoading={isLoading}
                            total={"Лидер"}
                            icon={<SimCardIcon fontSize="inherit" />}
                        />
                    </NavLink>
                </Box>
                <Box flex={1} width={{ xs: "100%", lg: "auto" }}>
                    <NavLink to='liberty-simcard-admin'>
                        <TotalIncomeLightCard
                            isLoading={isLoading}
                            total={"Либерти"}
                            icon={<SimCardIcon fontSize="inherit" />}
                        />
                    </NavLink>
                </Box>
                <Box flex={1} width={{ xs: "100%", lg: "auto" }}>
                    <NavLink to='monaco-simcard-admin'>
                        <TotalIncomeLightCard
                            isLoading={isLoading}
                            total={"Монако"}
                            icon={<SimCardIcon fontSize="inherit" />}
                        />
                    </NavLink>
                </Box>
            </Box>
            <Box
                display="flex"
                justifyContent="space-between"
                flexDirection={{ xs: "column", lg: "row" }}
                gap={2}
                marginTop='10px'
            >
                <Box flex={1} width={{ xs: "100%", lg: "auto" }}>
                    <NavLink to='turan-simcard-admin'>
                        <TotalIncomeLightCard
                            isLoading={isLoading}
                            total={"Туран"}
                            icon={<SimCardIcon fontSize="inherit" />}
                        />
                    </NavLink>
                </Box>
                <Box flex={1} width={{ xs: "100%", lg: "auto" }}>
                    <NavLink to='ilyas-simcard-admin'>
                        <TotalIncomeLightCard
                            isLoading={isLoading}
                            total={"Ильяс"}
                            icon={<SimCardIcon fontSize="inherit" />}
                        />
                    </NavLink>
                </Box>
                <Box flex={1} width={{ xs: "100%", lg: "auto" }}>
                    <NavLink to='admin-logist'>
                        <TotalIncomeLightCard
                            isLoading={isLoading}
                            total={"Админы логисты"}
                            icon={<SimCardIcon fontSize="inherit" />}
                        />
                    </NavLink>
                </Box>
            </Box>
        </Grid>
    )
}