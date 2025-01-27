import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { useConfigurator } from "../contexts/Configurator";

export const Interface = () => {
  const { legs, setLegs, legsColor, setLegsColor, tableWidth, setTableWidth } =
    useConfigurator()!;

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
      }}
      p={3}
    >
      <Stack spacing={3}>
        <Typography variant="caption">Table Configurator</Typography>
        <Box
          className="bg-white/15 rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[10px]"
          p={3}
        >
          <FormControl>
            <FormLabel>Table width</FormLabel>
            <Slider
              sx={{
                width: "200px",
              }}
              min={50}
              max={200}
              value={tableWidth}
              onChange={(_, value) => setTableWidth(value as number)}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Box>
        <Box
          className="bg-white/15 rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[10px]"
          p={3}
        >
          <FormControl>
            <FormLabel>Legs Layout</FormLabel>
            <RadioGroup
              value={legs}
              onChange={(e) =>
                setLegs(parseInt((e.target as HTMLInputElement).value))
              }
            >
              <FormControlLabel
                value={0}
                control={<Radio />}
                label="Standard"
              />
              <FormControlLabel value={1} control={<Radio />} label="Modern" />
              <FormControlLabel value={2} control={<Radio />} label="Classic" />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box
          className="bg-white/15 rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[10px]"
          p={3}
        >
          <FormControl>
            <FormLabel>Legs Color</FormLabel>
            <RadioGroup
              value={legsColor}
              onChange={(e) => setLegsColor(e.target.value)}
            >
              <FormControlLabel
                value={"#777777"}
                control={<Radio />}
                label="Black"
              />
              <FormControlLabel
                value={"#ECECEC"}
                control={<Radio />}
                label="Chrome"
              />
              <FormControlLabel
                value={"#C9BD71"}
                control={<Radio />}
                label="Gold"
              />
              <FormControlLabel
                value={"#C9A3B9"}
                control={<Radio />}
                label="Pink Gold"
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Stack>
    </Box>
  );
};
