// Studio input for icon fields: shows each icon visually (same lucide icons the
// website renders) instead of a plain text dropdown, with search.

import { useMemo, useState } from "react";
import { set, unset, type StringInputProps } from "sanity";
import { Box, Button, Card, Flex, Grid, Stack, Text, TextInput } from "@sanity/ui";
import { SearchIcon, CloseIcon } from "@sanity/icons";
import * as Lucide from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Option = { title: string; value: string };

const iconFor = (name?: string) =>
  name ? (Lucide as unknown as Record<string, LucideIcon | undefined>)[name] : undefined;

export function IconPickerInput(props: StringInputProps) {
  const { value, onChange, schemaType, readOnly } = props;
  const options = ((schemaType.options?.list as Option[]) || []).filter((o) => typeof o === "object");
  const [open, setOpen] = useState(!value);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return options;
    return options.filter(
      (o) => o.title.toLowerCase().includes(q) || o.value.toLowerCase().includes(q)
    );
  }, [options, query]);

  const selected = options.find((o) => o.value === value);
  const SelectedIcon = iconFor(value);

  const choose = (next: string) => {
    onChange(set(next));
    setOpen(false);
    setQuery("");
  };

  return (
    <Stack space={3}>
      {/* Current value */}
      <Card padding={3} radius={2} border tone={value ? "primary" : "default"}>
        <Flex align="center" gap={3}>
          <Flex
            align="center"
            justify="center"
            style={{ width: 40, height: 40, borderRadius: 8, background: "#EAF4FF", color: "#1D92FB", flexShrink: 0 }}
          >
            {SelectedIcon ? <SelectedIcon size={22} /> : <Text muted size={1}>–</Text>}
          </Flex>
          <Box flex={1}>
            <Text weight="semibold">{selected?.title || value || "No icon selected"}</Text>
          </Box>
          {!readOnly && (
            <Flex gap={2}>
              <Button
                mode="ghost"
                text={open ? "Close" : value ? "Change" : "Choose"}
                onClick={() => setOpen((o) => !o)}
              />
              {value && (
                <Button
                  mode="bleed"
                  tone="critical"
                  icon={CloseIcon}
                  title="Clear icon"
                  onClick={() => onChange(unset())}
                />
              )}
            </Flex>
          )}
        </Flex>
      </Card>

      {/* Picker */}
      {open && !readOnly && (
        <Card padding={3} radius={2} border>
          <Stack space={3}>
            <TextInput
              icon={SearchIcon}
              placeholder="Search icons, e.g. calendar, chat, shield"
              value={query}
              onChange={(e) => setQuery(e.currentTarget.value)}
            />
            <Box style={{ maxHeight: 320, overflowY: "auto" }}>
              <Grid columns={[3, 4, 6]} gap={2}>
                {filtered.map((option) => {
                  const Icon = iconFor(option.value);
                  const active = option.value === value;
                  return (
                    <Card
                      key={option.value}
                      as="button"
                      type="button"
                      padding={2}
                      radius={2}
                      border
                      tone={active ? "primary" : "default"}
                      onClick={() => choose(option.value)}
                      title={option.title}
                      style={{ cursor: "pointer", textAlign: "center" }}
                    >
                      <Stack space={2}>
                        <Flex justify="center" style={{ color: "#1D92FB" }}>
                          {Icon ? <Icon size={22} /> : null}
                        </Flex>
                        <Text size={0} muted={!active} textOverflow="ellipsis">
                          {option.title}
                        </Text>
                      </Stack>
                    </Card>
                  );
                })}
              </Grid>
              {filtered.length === 0 && (
                <Box padding={3}>
                  <Text muted size={1}>No icons match &ldquo;{query}&rdquo;.</Text>
                </Box>
              )}
            </Box>
          </Stack>
        </Card>
      )}
    </Stack>
  );
}
