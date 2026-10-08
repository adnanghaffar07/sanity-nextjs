// Studio input for picking a technology brand: a searchable grid of real logos
// (in brand colours), grouped by category. Stores the brand id, e.g. "hubspot".

import { useMemo, useState } from "react";
import { set, unset, type StringInputProps } from "sanity";
import { Box, Button, Card, Flex, Grid, Stack, Text, TextInput } from "@sanity/ui";
import { SearchIcon, CloseIcon } from "@sanity/icons";
import { BRANDS, getBrand } from "./brands";

const GROUP_ORDER = ["AI", "Channels", "Business tools", "Cloud & dev"];

export function BrandPickerInput(props: StringInputProps) {
  const { value, onChange, readOnly } = props;
  const [open, setOpen] = useState(!value);
  const [query, setQuery] = useState("");

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = q
      ? BRANDS.filter((x) => x.name.toLowerCase().includes(q) || x.id.includes(q))
      : BRANDS;
    return GROUP_ORDER.map((g) => ({ name: g, items: list.filter((x) => x.group === g) })).filter(
      (g) => g.items.length
    );
  }, [query]);

  const selected = getBrand(value);
  const SelectedIcon = selected?.icon;

  const choose = (id: string) => {
    onChange(set(id));
    setOpen(false);
    setQuery("");
  };

  return (
    <Stack space={3}>
      <Card padding={3} radius={2} border tone={value ? "primary" : "default"}>
        <Flex align="center" gap={3}>
          <Flex
            align="center"
            justify="center"
            style={{ width: 40, height: 40, borderRadius: 8, background: "#fff", border: "1px solid #e5e7eb", flexShrink: 0 }}
          >
            {SelectedIcon ? (
              <SelectedIcon size={22} style={{ color: selected!.color }} />
            ) : (
              <Text muted size={1}>–</Text>
            )}
          </Flex>
          <Box flex={1}>
            <Text weight="semibold">{selected?.name || "No brand selected"}</Text>
            {!selected && (
              <Box marginTop={2}>
                <Text muted size={1}>Pick a brand, or upload a logo below if it isn&apos;t listed.</Text>
              </Box>
            )}
          </Box>
          {!readOnly && (
            <Flex gap={2}>
              <Button mode="ghost" text={open ? "Close" : value ? "Change" : "Choose"} onClick={() => setOpen((o) => !o)} />
              {value && (
                <Button mode="bleed" tone="critical" icon={CloseIcon} title="Clear brand" onClick={() => onChange(unset())} />
              )}
            </Flex>
          )}
        </Flex>
      </Card>

      {open && !readOnly && (
        <Card padding={3} radius={2} border>
          <Stack space={3}>
            <TextInput
              icon={SearchIcon}
              placeholder="Search brands, e.g. hubspot, aws, whatsapp"
              value={query}
              onChange={(e) => setQuery(e.currentTarget.value)}
            />
            <Box style={{ maxHeight: 360, overflowY: "auto" }}>
              <Stack space={4}>
                {groups.map((group) => (
                  <Stack key={group.name} space={2}>
                    <Text size={0} weight="semibold" muted style={{ textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      {group.name}
                    </Text>
                    <Grid columns={[3, 4, 5]} gap={2}>
                      {group.items.map((brand) => {
                        const Icon = brand.icon;
                        const active = brand.id === value;
                        return (
                          <Card
                            key={brand.id}
                            as="button"
                            type="button"
                            padding={2}
                            radius={2}
                            border
                            tone={active ? "primary" : "default"}
                            onClick={() => choose(brand.id)}
                            title={brand.name}
                            style={{ cursor: "pointer", textAlign: "center" }}
                          >
                            <Stack space={2}>
                              <Flex justify="center">
                                <Icon size={22} style={{ color: brand.color }} />
                              </Flex>
                              <Text size={0} muted={!active} textOverflow="ellipsis">
                                {brand.name}
                              </Text>
                            </Stack>
                          </Card>
                        );
                      })}
                    </Grid>
                  </Stack>
                ))}
                {groups.length === 0 && (
                  <Text muted size={1}>
                    No brands match &ldquo;{query}&rdquo;. Upload a logo instead.
                  </Text>
                )}
              </Stack>
            </Box>
          </Stack>
        </Card>
      )}
    </Stack>
  );
}
